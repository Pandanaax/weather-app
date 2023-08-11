import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  position: relative;
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  /* Additional styling */
  &:hover {
    background-color: #0056b3;
  }
`;

const ButtonWithLoading = ({ onClick, isLoading, text }) => (
  <StyledButton onClick={onClick} disabled={isLoading}>
    {isLoading && (
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 38 38"
          stroke="#fff"
        >
        <svg xmlns="http://www.w3.org/2000/svg" style={{margin:'auto',background:'0 0'}} width={'20'} height={'20'} viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" display="block">
            <g transform="translate(80 50)">
                <circle r="3" fill={"#E83E45"}>
                    <animateTransform attributeName="transform" type="scale" begin="-0.9166666666666666s" values="2.51 2.51;1 1" keyTimes="0;1" dur="1s" repeatCount="indefinite"/>
                    <animate attributeName="fill-opacity" keyTimes="0;1" dur="1s" repeatCount="indefinite" values="1;0" begin="-0.9166666666666666s"/>
                </circle>
            </g>
            <g transform="rotate(30 -83.30127019 174.2820323)">
                <circle r="3" fill={"#E83E45"} fillOpacity=".91666667">
                    <animateTransform attributeName="transform" type="scale" begin="-0.8333333333333334s" values="2.51 2.51;1 1" keyTimes="0;1" dur="1s" repeatCount="indefinite"/>
                    <animate attributeName="fill-opacity" keyTimes="0;1" dur="1s" repeatCount="indefinite" values="1;0" begin="-0.8333333333333334s"/>
                </circle>
            </g>
            <g transform="rotate(60 -33.30127019 94.2820323)">
                <circle r="3" fill={"#E83E45"} fillOpacity=".83333333">
                    <animateTransform attributeName="transform" type="scale" begin="-0.75s" values="2.51 2.51;1 1" keyTimes="0;1" dur="1s" repeatCount="indefinite"/>
                    <animate attributeName="fill-opacity" keyTimes="0;1" dur="1s" repeatCount="indefinite" values="1;0" begin="-0.75s"/>
                </circle>
            </g>
            <g transform="rotate(90 -15 65)">
                <circle r="3" fill={"#E83E45"} fillOpacity=".75">
                    <animateTransform attributeName="transform" type="scale" begin="-0.6666666666666666s" values="2.51 2.51;1 1" keyTimes="0;1" dur="1s" repeatCount="indefinite"/>
                    <animate attributeName="fill-opacity" keyTimes="0;1" dur="1s" repeatCount="indefinite" values="1;0" begin="-0.6666666666666666s"/>
                </circle>
            </g>
            <g transform="rotate(120 -4.43375673 48.09401077)">
                <circle r="3" fill={"#E83E45"} fillOpacity=".66666667">
                    <animateTransform attributeName="transform" type="scale" begin="-0.5833333333333334s" values="2.51 2.51;1 1" keyTimes="0;1" dur="1s" repeatCount="indefinite"/>
                    <animate attributeName="fill-opacity" keyTimes="0;1" dur="1s" repeatCount="indefinite" values="1;0" begin="-0.5833333333333334s"/>
                </circle>
            </g>
            <g transform="rotate(150 3.30127019 35.7179677)">
                <circle r="3" fill={"#E83E45"} fillOpacity=".58333333">
                    <animateTransform attributeName="transform" type="scale" begin="-0.5s" values="2.51 2.51;1 1" keyTimes="0;1" dur="1s" repeatCount="indefinite"/>
                    <animate attributeName="fill-opacity" keyTimes="0;1" dur="1s" repeatCount="indefinite" values="1;0" begin="-0.5s"/>
                </circle>
            </g>
            <g transform="rotate(180 10 25)">
                <circle r="3" fill={"#E83E45"} fillOpacity=".5">
                    <animateTransform attributeName="transform" type="scale" begin="-0.4166666666666667s" values="2.51 2.51;1 1" keyTimes="0;1" dur="1s" repeatCount="indefinite"/>
                    <animate attributeName="fill-opacity" keyTimes="0;1" dur="1s" repeatCount="indefinite" values="1;0" begin="-0.4166666666666667s"/>
                </circle>
            </g>
            <g transform="rotate(-150 16.69872981 14.2820323)">
                <circle r="3" fill={"#E83E45"} fillOpacity=".41666667">
                    <animateTransform attributeName="transform" type="scale" begin="-0.3333333333333333s" values="2.51 2.51;1 1" keyTimes="0;1" dur="1s" repeatCount="indefinite"/>
                    <animate attributeName="fill-opacity" keyTimes="0;1" dur="1s" repeatCount="indefinite" values="1;0" begin="-0.3333333333333333s"/>
                </circle>
            </g>
            <g transform="rotate(-120 24.43375673 1.90598923)">
                <circle r="3" fill={"#E83E45"} fillOpacity=".33333333">
                    <animateTransform attributeName="transform" type="scale" begin="-0.25s" values="2.51 2.51;1 1" keyTimes="0;1" dur="1s" repeatCount="indefinite"/>
                    <animate attributeName="fill-opacity" keyTimes="0;1" dur="1s" repeatCount="indefinite" values="1;0" begin="-0.25s"/>
                </circle>
            </g>
            <g transform="rotate(-90 35 -15)">
                <circle r="3" fill={"#E83E45"} fillOpacity=".25">
                    <animateTransform attributeName="transform" type="scale" begin="-0.16666666666666666s" values="2.51 2.51;1 1" keyTimes="0;1" dur="1s" repeatCount="indefinite"/>
                    <animate attributeName="fill-opacity" keyTimes="0;1" dur="1s" repeatCount="indefinite" values="1;0" begin="-0.16666666666666666s"/>
                </circle>
            </g>
            <g transform="rotate(-60 53.30127019 -44.2820323)">
                <circle r="3" fill={"#E83E45"} fillOpacity=".16666667">
                    <animateTransform attributeName="transform" type="scale" begin="-0.08333333333333333s" values="2.51 2.51;1 1" keyTimes="0;1" dur="1s" repeatCount="indefinite"/>
                    <animate attributeName="fill-opacity" keyTimes="0;1" dur="1s" repeatCount="indefinite" values="1;0" begin="-0.08333333333333333s"/>
                </circle>
            </g>
            <g transform="rotate(-30 103.30127019 -124.2820323)">
                <circle r="3" fill={"#E83E45"} fillOpacity=".08333333">
                    <animateTransform attributeName="transform" type="scale" begin="0s" values="2.51 2.51;1 1" keyTimes="0;1" dur="1s" repeatCount="indefinite"/>
                    <animate attributeName="fill-opacity" keyTimes="0;1" dur="1s" repeatCount="indefinite" values="1;0" begin="0s"/>
                </circle>
            </g>
        </svg>
        </svg>
      </div>
    )}
    <span style={{ visibility: isLoading ? 'hidden' : 'visible' }}>{text}</span>
  </StyledButton>
);

export default ButtonWithLoading;
