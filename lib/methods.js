    Meteor.publish('msg', function() {
        return mensagens.find();
    });

    Meteor.methods({
        'inserirMsg': function(userNameVar, messageVar, now) {

            mensagens.insert({
                userName: userNameVar,
                message: messageVar,
                now: now
            });

        }
    });
