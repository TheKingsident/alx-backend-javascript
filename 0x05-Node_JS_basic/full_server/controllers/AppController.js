class AppController {
    static getHomePage(_, response) {
      response.statusCode = 200;
      response.send('Hello Holberton School!');
    }
  }

  export default AppController;
