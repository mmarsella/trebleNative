import * as React from "react";
import ComposositionList from "../../stories/screens/compositionList";
export interface Props {
	navigation: any,
}
export interface State {}
export default class ComposositionListContainer extends React.Component<Props, State> {
	render() {
		return <ComposositionList navigation={this.props.navigation} />;
	}
}