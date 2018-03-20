import { colors } from '../colors';
import * as React from 'react';
import { getSpace, Size as SpaceSize } from '../space';

export interface ErrorMessageProps {
	error: string;
	patternName: string;
}

export const ErrorMessage: React.StatelessComponent<ErrorMessageProps> = props => (
	<div
		style={{
			'background-color': colors.red.toString(),
			color: colors.white.toString(),
			padding: `${getSpace(SpaceSize.S)}px ${getSpace(SpaceSize.M)}px`,
			'text-align': 'center'
		}}
	>
		<p
			style={{
				margin: '0',
				'font-family':
					'-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
				'font-size': '15px',
				'line-height': '22px'
			}}
		>
			{props.patternName} failed to render: {props.error}
		</p>
	</div>
);
