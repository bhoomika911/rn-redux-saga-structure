import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    View,
    Text
} from 'react-native';
import API from "../../Constants/APIUrls";
import Loader from "../../CommonComponent/Loader.js";
import NoRecordsFound from "../../CommonComponent/NoRecordsFound.js";
import { Actions } from 'react-native-router-flux';
import styles from './DashboardStyle';
import {
    getMovieList
} from "./../../Action/ActionCreators";
import {
    clearMovieListRes,
} from './DashboardAction';

class DashboardScreen extends Component {
    constructor() {
        super();

        this.state = {
            isScreenLoading: true,
            isDataSet: false,
            movieList: []
        };
    }

    componentDidMount() {
        //********************** Load Movies start *****************//
        this.callGetMovieListWS();
        //********************** Load Movies end *****************//
    }

    callGetMovieListWS() {
        let url = API.GET_MOVIE_LIST;
        let payload = {
            url,
            method: "GET"
        };
        this.props.getMovieList(payload);
    }

    componentDidUpdate() {
        if (this.props.getMovieListRes != undefined && this.props.getMovieListRes != '') {
            if (this.props.getMovieListRes.headerResponse && this.props.getMovieListRes.headerResponse.status == 200) {
                if (this.props.getMovieListRes.data) {
                    let movieList = this.props.getMovieListRes.data.movies;
                    this.setState({
                        isScreenLoading: false,
                        isDataSet: true,
                        movieList
                    });
                }
            } else {
                this.setState({
                    isScreenLoading: false,
                    isDataSet: true,
                });
                alert("error");
            }
            this.props.clearMovieListRes();
        }
    }

    onPressBack() {
        Actions.pop();
    }

    render() {
        let { isScreenLoading, movieList, isDataSet } = this.state;

        return (
            <View style={styles.mainContainer}>
                <Text>--------{Strings.MOVIE_LIST}--------</Text>
                {
                    isDataSet &&
                    (movieList.length > 0 ?
                        movieList.map((objMovie) => {
                            return (
                                <Text>{objMovie.title}</Text>
                            )
                        })
                        :
                        <NoRecordsFound />)
                }
                {
                    isScreenLoading && <Loader />
                }
            </View>
        )
    }
}

const mapStateToProps = ({ dashboardReducer }) => {
    const {
        getMovieListRes
    } = dashboardReducer;

    return {
        getMovieListRes
    }
}

export default connect(mapStateToProps, {
    getMovieList,
    clearMovieListRes,
})(DashboardScreen);
