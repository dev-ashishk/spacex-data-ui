import React, { Component } from "react";
import { connect } from "react-redux";
import {
    Card,
    Filter,
    Loader,
    Footer
} from "../../components";
import fetchList from "../../actions";
import getYears from "../../utils/getYears";

const filters = [{
    displayName: "Launch Year",
    keyName: "launch_year",
    values: getYears()
}, {
    displayName: "Successful Launch",
    keyName: "launch_success",
    values: ["true", "false"]
}, {
    displayName: "Successful Landing",
    keyName: "land_success",
    values: ["true", "false"]
}];

const INITIAL_STATE = {
    launch_year: 2006,
    launch_success: null,
    land_success: null
};
class Home extends Component {
    state = {
        ...INITIAL_STATE
    }

    resetFilters = (e) => {
        e.preventDefault();
        this.setState({
            ...INITIAL_STATE
        }, () => {
            this.props.fetchList(this.state);
        });
    }

    componentDidMount() {
        this.props.fetchList();
    }

    onFilterSelect = (key, value) => {
        const obj = {
            ...this.state
        };
        obj[key] = value;
        this.setState({
            ...obj
        }, () => {
            this.props.fetchList(this.state);
        });
    }

    render() {
        const { data, loading } = this.props;

        const NoDataBanner = () => (
            <h2 style={{
                margin: "auto",
                textAlign: "center"
            }}>No Data Available !</h2>
        );

        return (
            <React.Fragment>
                <Loader show={loading}/>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-xs-12 col-md-12 col-lg-12">
                            <h1 style={{
                                margin: "2rem 0.7rem"
                            }}>SpaceX Launch Programs</h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-3 col-md-3 col-lg-3 col-xs-12">
                            <div className="filters">
                                <div className="filter-reset" style={{
                                    textAlign: "right",
                                    margin: "1em"
                                }}>
                                    <a href="#" className="text-primary" onClick={this.resetFilters}>Reset All</a>
                                </div>
                                {
                                    filters.map((filter, i) => <Filter filter={filter} selected={this.state} onSelect={this.onFilterSelect} key={i} />)
                                }
                            </div>
                        </div>
                        <div className="col-9 col-md-9 col-lg-9 col-xs-12">
                            <div className="row">
                                {
                                    data.length > 0
                                        ? data.map((item, i) => <div key={i} className="col-4 col-xs-12 col-md-4 col-ls-4 no-padding"><Card {...item}/></div>)
                                        : <NoDataBanner/>
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="row">
                        <Footer />
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
const mapStateToProps = ({ list }) => ({
    data: list.data,
    loading: list.loading
});
export default connect(mapStateToProps, {
    fetchList
})(Home);
