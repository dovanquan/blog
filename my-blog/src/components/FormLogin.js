import React, { Component } from 'react';

class FormLogin extends Component {
  render() {
    return (
      <div className="bg-faded p-4 my-4">
      <hr className="divider" />
      <h2 className="text-center text-lg text-uppercase my-0">Login 
         <strong>Form</strong>
      </h2>
      <hr className="divider" />
      <form>
         <div className="row">
            <div className="form-group col-lg-4">
               <label className="text-heading">UserName</label>
               <input type="text" className="form-control" />
            </div>
            <div className="form-group col-lg-4">
               <label className="text-heading">Password</label>
               <input type="email" className="form-control" />
            </div>
            <div className="clearfix" />
               <div className="form-group col-lg-12">
                  <button type="submit" className="btn btn-secondary">Submit</button>
               </div>
            </div>
      </form>
      </div>
    );
  }
}

export default FormLogin;
