import React ,{Component} from 'react';
import { withRouter } from 'react-router-dom';
import BtnBack from '../components/BtnBack';

class NewBook extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        title : '',
        author : '',
        number_pages : '',
        category : '',
        synopsis : '',
        image : '',
        validation : false
    };

    this.author = React.createRef();
    this.title = React.createRef();
    this.category = React.createRef();
    this.synopsis =  React.createRef();
    this.number_pages =  React.createRef();
    this.image =  React.createRef();

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputFileChange = this.handleInputFileChange.bind(this);
  }

  handleInputChange(event) {
    const name = event.target.name;
    this.setState({[name]: event.target.value});
  }

  handleInputFileChange(event){
    this.setState({image :  event.target.files[0]});
    let reader = new FileReader();

    reader.onloadend = () => {
      this.setState({
        imagePreviewUrl: reader.result
      });
    }

    reader.readAsDataURL(event.target.files[0])
  }

  handleInputValidation(inputName){
    let validation = false;
    let  divClass = '';
    if(this.state[inputName] == ''){
      divClass ='text-danger';
    }else{
      divClass =  'd-none';
      validation = true;
    }
    this[inputName].current.className = divClass;
    return validation;
  }

  handleSubmit(event) {
    event.preventDefault();
    //validations
    if(this.handleInputValidation('title')
    & this.handleInputValidation('author')
    & this.handleInputValidation('category')
    & this.handleInputValidation('synopsis')
    & this.handleInputValidation('number_pages')
    & this.handleInputValidation('image') ){
      this.setState({validation : true});
    }
    if(this.state.validation){
      const formData = new FormData();
      formData.append('img' , this.state.image);
      formData.append('title' , this.state.title);
      formData.append('author' , this.state.author);
      formData.append('number_pages' , this.state.number_pages);
      formData.append('category' , this.state.category);
      formData.append('synopsis' , this.state.synopsis);

      fetch('http://localhost:3000/api/v1/book/new',{
          method: 'POST',
          body: formData,
          credentials: 'same-origin'
      }).then( resp => {
          if(resp.status === 200){
            alert('Libro agregado');
            this.props.history.push('/');
          }else{
            alert('Ocurrio un error');
          }
      });
    }
  }

  render(){
    let imagePreview = (<div className="previewText image-container"></div>);
    if (this.state.imagePreviewUrl) {
      imagePreview = (<div className="" ><img src={this.state.imagePreviewUrl} alt="icon" /> </div>);
    }
    return(
      <div class="container mt-5">
      <BtnBack/>
      <div class="row">
        <div class="col-2"></div>
        <div class="col-8">
            <form onSubmit={ this.handleSubmit}>
              <div class="form-group">
                  <label>Titulo</label>
                  <input type="text" name="title" class="form-control"  onChange={this.handleInputChange}/>
                  <div class="d-none" ref={this.title}>Este campo no puede estar vacío</div>
              </div>
              <div class="form-group" >
                  <label>Autor</label>
                  <input type="text" name="author" class="form-control" onChange={ this.handleInputChange}/>
                  <div class="d-none" ref={this.author}>Este campo no puede estar vacío</div>
              </div>
              <div class="form-group" >
                  <label>Numeros de paginas</label>
                  <input type="number" name="number_pages" class="form-control" onChange={ this.handleInputChange}/>
                  <div class="d-none" ref={this.number_pages}>Este campo no puede estar vacío</div>
              </div>
              <div class="form-group" >
                  <label>Categoria</label>
                  <input type="text" name="category" class="form-control" onChange={this.handleInputChange}/>
                  <div class="d-none" ref={this.category}>Este campo no puede estar vacío</div>
              </div>
              <div class="form-group">
                  <label>sinopsis</label>
                  <textarea class="form-control" name="synopsis" rows="3"  onChange={this.handleInputChange} ></textarea>
                  <div class="d-none" ref={this.synopsis}>Este campo no puede estar vacío</div>
              </div>
              <div class="form-group">
                <input type="file" onChange={ this.handleInputFileChange}/>
                <div class="d-none" ref={this.image}>Este campo no puede estar vacío</div>
                {imagePreview}
              </div>
              <div class="form-group">
                <input type="submit" value="Crear" class="btn btn-primary btn-block"/>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(NewBook);
