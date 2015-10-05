
    // subscribe da base de dados após remover autopublish
    Meteor.subscribe('msg');

    Template.chatMensagens.helpers({
        // Mostrar histórico das conversas.
        'mensagensChat': function() {
            return mensagens.find();
        }
    });

    Template.addMessage.events({

        'submit form': function(e) {
            e.preventDefault();
            var userNameVar = e.target.userName.value;
            var messageVar = e.target.message.value;
            var now = moment().format("DD/MM/YY HH:mm");
            Meteor.call('inserirMsg', userNameVar, messageVar, now);
            e.target.message.value = null;

        }
    });
