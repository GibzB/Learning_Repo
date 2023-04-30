// what if you want to create a helper function to perform a calculation 
//  and then provide a value that you can use elsewhere?

function createGreetingMessage(name) {
    const message = `Hello, ${name}`;
    return message;
  }

  let greetingMessage = createGreetingMessage('Christopher');

  