const functions = require('firebase-functions');
const Alexa = require('ask-sdk-core');

exports.alexa = functions.region('europe-west1').https.onRequest((request, response) => {
    let skill = Alexa.SkillBuilders.custom()
        .addRequestHandlers(
            LaunchRequestHandler
        )
        .create();
    
    skill.invoke(request.body).then((res) => {
        response.json(res);
    }).catch((error) => {
        console.log(error);
        response.status(500).send('Error during the request');
    });

    response.send(AlexaDefaultAnswer);
});

const LaunchRequestHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'LaunchRequest';
    },
    handle(handlerInput) {
        console.log(handlerInput);
        var random = Math.floor(Math.random() * 8) + 1;
        return handlerInput.responseBuilder
            .speak('<audio src="url to bestemmia mp3 dir' + random + '_ok.mp3" />')
            .getResponse();
    },
};