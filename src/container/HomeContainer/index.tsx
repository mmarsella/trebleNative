import * as React from "react";
import { connect } from "react-redux";
import Home from "../../stories/screens/Home";
import datas from "./data";  //exported array
import { fetchList } from "./actions";
export interface Props {
	navigation: any;
	fetchList: Function;
	data: Object;
}
export interface State {}
class HomeContainer extends React.Component<Props, State> {
	componentDidMount() {
		this.props.fetchList(datas);
	}
	render() {
		return <Home navigation={this.props.navigation} list={this.props.data} />;
	}
}

// Dispatches to the store
function bindAction(dispatch) {
	return {
		fetchList: url => dispatch(fetchList(url)),
	};
}

// The HomeContainer only cares about data, isLoading
const mapStateToProps = state => ({
	data: state.homeReducer.list,
	isLoading: state.homeReducer.isLoading,
});

// this connects the home container to the Redux store
export default connect(mapStateToProps, bindAction)(HomeContainer);
