import React from 'react';

class LocationForm extends React.Component {

    changeLocation = (e) => {
        e.preventDefault();
        const location = { 
            city: this.refs.city.value,
            state: this.refs.state.value
        }
        this.props.onLocationChange(location);
    }

    render(){
        return(
            <div>
                <h3>Change Location</h3>
                <form onSubmit={this.changeLocation}>
                    <div className="form-group">
                    <input type="text" className="form-control" ref="city" placeholder="Enter City"/>
                    </div>
                    <br/>
                    <div className="form-group">
                    <input type="text" className="form-control" ref="state" placeholder="Enter State"/>
                    </div>
                    <br/>
                    <input className="btn btn-primary btn-block" type="submit" value="submit" />
                </form>
            </div>
        )
    }
}

export default LocationForm;