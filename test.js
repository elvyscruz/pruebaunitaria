const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('./app'); // Asegúrate de ajustar la ruta según la ubicación de tu aplicación

chai.use(chaiHttp);
const expect = chai.expect;

describe('Pruebas Unitarias', () => {
  it('Debería devolver ¡Hola Mundo! en la ruta principal', (done) => {
    chai.request(app)
      .get('/')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.text).to.equal('¡Hola Mundo!');
        done();
      });
  });
});
