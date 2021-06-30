import React, { Component } from "react";
import "../App.css";
export default class TodoInput extends Component {
    render() {
        const { item, handleChange, handleSubmit, editItem } = this.props;
        return (
            <div className="card card-body my-3">
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <input
                            type="text"
                            className="form-control text-capitalize"
                            placeholder="add an item"
                            value={item}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="text-center">
                        <button
                            type="submit"
                            className={
                                editItem
                                    ? "btn btn-block btn-success mt-3 text-capitalize"
                                    : "btn btn-block btn-primary mt-3 text-capitalize"
                            }
                        >
                            {editItem ? "edit item" : "add item"}
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}
