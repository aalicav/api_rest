class HomeController {
  // eslint-disable-next-line class-methods-use-this
  async index(req, res) {
    res.json('ok');
  }
}

export default new HomeController();
