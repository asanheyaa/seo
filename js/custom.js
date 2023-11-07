class Mattermost {
    constructor(hook_url, http_proxy_options) {
        this.hook_url = hook_url;
        this.http_proxy_options = http_proxy_options;
    }

    send(message, cb) {
        if (!message.text) {
            if (cb) cb.call(null, { message: 'No text specified' }, null);
            return;
        }

        var command = this.hook_url;
        var body = {
            text: message.text,
        };

        if (message.username) {
            body.username = message.username;
        }
        if (message.channel) {
            body.channel = message.channel;
        }
        if (message.icon_url) {
            body.icon_url = message.icon_url;
        }
        if (message.icon_emoji) {
            body.icon_emoji = message.icon_emoji;
        }
        if (message.attachments) {
            body.attachments = message.attachments;
        }
        if (message.unfurl_links) {
            body.unfurl_links = message.unfurl_links;
        }
        if (message.link_names) {
            body.link_names = message.link_names;
        }

        var option = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        };

        if (!cb) {
            var d = new Promise(function(resolve, reject) {
                this.resolve = resolve;
                this.reject = reject;
            });
        }

        var req = fetch(command, option)
            .then(function(res) {
                return res.text();
            })
            .then(function(data) {

                if (data === 'ok') {
                    if (d) return d.resolve({ res: null, body: data });
                    if (cb) return cb.call(null, null, data);
                } else {
                    try {
                        var parsedData = JSON.parse(data);
                        if (d) return d.resolve({ res: null, body: parsedData });
                        if (cb) return cb.call(null, null, parsedData);
                    } catch (err) {
                        var error = { message: data };
                        if (d) return d.reject(error);
                        if (cb) return cb.call(null, error, null);
                    }
                }

            })
            .catch(function(err) {
                if (d) return d.reject(err);
                if (cb) return cb.call(null, err, null);
            });

        return d ? d : req;

    }

    respond(query, cb) {
        var obj = {};

        obj.token = query.token;
        obj.team_id = query.team_id;
        obj.channel_id = query.channel_id;
        obj.channel_name = query.channel_name;
        obj.timestamp = new Date(query.timestamp);
        obj.user_id = query.user_id;
        obj.user_name = query.user_name;
        obj.text = query.text;

        if (!cb) {
            return { text: '' };
        } else {
            return cb.call(null, obj);
        }
    }
}

