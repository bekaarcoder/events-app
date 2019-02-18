import React, { Component } from "react";
import Script from "react-load-script";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng
} from "react-places-autocomplete";

class PlaceInput extends Component {
  state = {
    scriptLoaded: false
  };

  handleScriptLoaded = () => {
    this.setState({
      scriptLoaded: true
    });
  };

  render() {
    const {
      input: { value, onChange, name, ...restInput },
      width,
      onSelect,
      placeholder,
      options,
      label,
      meta: { touched, error }
    } = this.props;
    console.log(this.props.meta);
    return (
      <div>
        <Script
          url="https://maps.googleapis.com/maps/api/js?key=AIzaSyCpG6LIJ9NycCS_8YGtZIpRsRIQ0b80UCo&libraries=places"
          onLoad={this.handleScriptLoaded}
        />
        {this.state.scriptLoaded && (
          <PlacesAutocomplete
            value={value}
            onChange={onChange}
            options={options}
            onSelect={onSelect}
          >
            {({
              getInputProps,
              suggestions,
              getSuggestionItemProps,
              loading
            }) => (
              <div className="form-group">
                <label>{label}</label>
                <input
                  {...getInputProps({
                    placeholder: placeholder,
                    className:
                      "form-control " + (touched && error && "is-invalid"),
                    name: name,
                    ...restInput
                  })}
                />
                <div className="invalid-feedback">{touched && error}</div>
                <div className="autocomplete-dropdown-container">
                  {loading && <div>Loading...</div>}
                  {suggestions.map(suggestion => {
                    const className = suggestion.active
                      ? "suggestion-item--active"
                      : "suggestion-item";
                    // inline style for demonstration purpose
                    const style = suggestion.active
                      ? { backgroundColor: "#fafafa", cursor: "pointer" }
                      : { backgroundColor: "#ffffff", cursor: "pointer" };
                    return (
                      <div
                        {...getSuggestionItemProps(suggestion, {
                          className,
                          style
                        })}
                      >
                        <span>{suggestion.description}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </PlacesAutocomplete>
        )}
      </div>
    );
  }
}

export default PlaceInput;
