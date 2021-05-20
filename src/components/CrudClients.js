import React, { Component} from 'react';
import axios from 'axios';
import '../style/components/CrudClients.scss';

const baseUrl = "http://homolog.grupogaia.com.br/prova/front/api/clients";
  const initialState = {
    client: {
      name: '',
      cnpj: '',
      email: ''
     
    },
     list: []
    
  };

  

class CrudClients extends Component {

  state = { ...initialState };

  componentDidMount() {
    axios.get(baseUrl).then((resp) => {
      this.setState({ list: resp.data });
    });
    
  }

  clear() {
    this.setState({ client: initialState.client });
  }

  save() {
    const client = this.state.client;
    const method = client.id ? 'put' : 'post';
    const url = client.id ? `${baseUrl}/${client.id}` : baseUrl;
    axios[method](url, client).then((resp) => {
      const list = this.getUpdatedList(resp.data);
      this.setState({ client: initialState.client, list });
    });
  }

  getUpdatedList(client, add = true) {
    const list = this.state.list.filter((cli) => cli.id !== client.id);
    if (add) list.unshift(client);
    return list;
  }

  updateField(event) {
    const client = { ...this.state.client };
    client[event.target.name] = event.target.value;
    this.setState({ client });
  }
  remove() {
    const client = this.state.client;
    axios.delete(`${baseUrl}/${client.id}`).then((resp) => {
      const list = this.getUpdatedList(client, false);
      this.setState({  list });
    });
  }

  load(client) {
    this.setState({ client });
  }
  renderList() {
    return this.state.list.map((client) => {
      return (
        <li
          key={client.id}
          className="client"
          data-toggle="modal"
          data-target="#myModal"
          onClick={() => this.load(client)}
        >
          <h1>{client.name}</h1>
          <div className="info">
            <h2>CNPJ: {client.cnpj}</h2>
            <h2>Email: {client.email}</h2>
          </div>
        </li>
      );
    });
  }

  render() {
    return (
      <>
        <div className="listClients">
          <button
            className="btn btn-secondary btn-lg btn-block btn-add"
            data-toggle="modal"
            data-target="#myModal"
          >
            + adicionar empresa
          </button>

          {this.renderList()}

          <div className="modal" id="myModal">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h4 className="modal-title">Empresa</h4>
                  <button type="button" className="close" data-dismiss="modal">
                    &times;
                  </button>
                </div>

                <div className="modal-body">
                  <label htmlFor="name">Nome:</label>
                  <input
                    type="name"
                    name="name"
                    value={this.state.client.name}
                    onChange={(e) => this.updateField(e)}
                    className="form-control"
                    placeholder="Enter name"
                    id="name"
                  />
                  <label htmlFor="cnpj">CNPJ:</label>
                  <input
                    type="cnpj"
                    name="cnpj"
                    className="form-control"
                    value={this.state.client.cnpj}
                    onChange={(e) => this.updateField(e)}
                    placeholder="Enter cnpj"
                    id="cnpj"
                  />

                  <label htmlFor="email">Email:</label>
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    value={this.state.client.email}
                    onChange={(e) => this.updateField(e)}
                    placeholder="Enter email"
                    id="email"
                  />
                </div>

                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-danger delet"
                    data-dismiss="modal"
                    onClick={(client) => this.remove(client)}
                  >
                    excluir
                  </button>
                  <div className="group-btn">
                    <button
                      type="button"
                      onClick={(e) => this.clear(e)}
                      className="btn btn-outline-primary cancelar"
                      data-dismiss="modal"
                    >
                      Cancelar
                    </button>

                    <button
                      type="button"
                      className="btn  save"
                      data-dismiss="modal"
                      onClick={(e) => this.save(e)}
                    >
                      ok
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default CrudClients;