import { colors } from '../../colors';
import { fonts } from '../../fonts';
import * as React from 'react';
import { getSpace, Size } from '../../space';
import styled from 'styled-components';

export interface StringItemProps {
	className?: string;
	handleChange?: React.ChangeEventHandler<HTMLInputElement>;
	label: string;
	value?: string;
}

const StyledStringItem = styled.div`
	width: 100%;
`;

const StyledLabel = styled.span`
	display: block;
	margin-bottom: ${getSpace(Size.XS)}px;
	font-size: 12px;
	font-family: ${fonts().NORMAL_FONT};
	color: ${colors.grey36.toString()};
`;

const StyledInput = styled.input`
	display: block;
	box-sizing: border-box;
	width: 100%;
	text-overflow: ellipsis;
	border: none;
	border-bottom: 1px solid transparent;
	background: transparent;
	font-family: ${fonts().NORMAL_FONT};
	font-size: 15px;
	padding-bottom: ${getSpace(Size.M) / 2}px;
	color: ${colors.grey36.toString()};
	margin-bottom: ${getSpace(Size.L)}px;
	transition: all 0.2s;

	::-webkit-input-placeholder {
		color: ${colors.grey60.toString()};
	}

	&:hover {
		color: ${colors.black.toString()};
		border-color: ${colors.grey60.toString()};
	}

	&:focus {
		outline: none;
		border-color: ${colors.blue40.toString()};
		color: ${colors.black.toString()};
	}
`;

export const StringItem: React.StatelessComponent<StringItemProps> = props => {
	const { className, handleChange, label, value } = props;

	return (
		<StyledStringItem className={className}>
			<label>
				<StyledLabel>{label}</StyledLabel>
				<StyledInput
					onChange={handleChange}
					type="textarea"
					value={value}
					placeholder="Type in"
				/>
			</label>
		</StyledStringItem>
	);
};

export default StringItem;
