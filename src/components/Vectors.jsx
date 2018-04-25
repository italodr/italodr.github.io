import React, { Component } from 'react';
import styled from 'styled-components';

import theme from 'styles/theme.styles';
import { space } from 'helpers';

const Item = styled.svg.attrs({
  resheight: props => props.size || props.height,
  reswidth: props => props.width * ((props.size || props.height) / props.height)
})`
  display: block;
  height: ${props => props.resheight}px;
  width: ${props => props.reswidth}px;
`;

const Icon = Item.extend`
  display: inline-block;
  margin: 0 ${space(0.5)} 0 0;

  path {
     fill: ${theme.default.COLOR_BLACKLIGHT};
  }
`;

class Logo extends Component {
  render() {
    return (
      <Item
        xmlns="http://www.w3.org/2000/svg"
        {...this.props}
        width="180"
        height="80"
        viewBox="0 0 180 80"
      >
        <circle fill="#6A926A" cx="53.764" cy="66.629" r="10.014" />
        <circle fill="#00929F" cx="90" cy="66.629" r="10.015" />
        <circle fill="#35A492" cx="126.235" cy="66.629" r="10.015" />
        <path
          fill="#B3B3B3"
          d="M12.41 8.546c0 .56-.183 1.024-.548 1.39-.367.366-.83.55-1.39.55s-1.024-.184-1.39-.55c-.367-.366-.55-.83-.55-1.39s.184-1.023.55-1.39c.366-.366.83-.55 1.39-.55s1.023.185 1.39.55c.365.367.55.83.55 1.39h-.002zm-.71 39.36H9.244V17.272H11.7v30.637-.003zm23.136.001H30.44c-2.886 0-5.095-.764-6.624-2.29-1.53-1.527-2.294-3.688-2.294-6.486V8.87h2.456v8.402h10.858V19.6H23.98v19.777c0 1.896.537 3.404 1.615 4.524 1.077 1.122 2.52 1.68 4.33 1.68h4.913v2.327l-.002-.001zm32.964 0h-2.457V32.59c0-3.706-1.174-6.905-3.522-9.6-2.348-2.69-5.33-4.04-8.95-4.04-3.232 0-6.1 1.316-8.597 3.943-2.5 2.63-3.75 5.86-3.75 9.695s1.25 7.067 3.75 9.695c2.5 2.63 5.365 3.942 8.596 3.942 1.938 0 3.66-.365 5.17-1.1 1.507-.73 2.972-1.852 4.394-3.36v2.91c-1.38 1.162-2.79 2.1-4.233 2.81-1.443.712-3.22 1.067-5.33 1.067-4.18 0-7.714-1.508-10.6-4.524-2.888-3.016-4.332-6.83-4.332-11.44 0-4.566 1.432-8.37 4.298-11.408 2.865-3.038 6.41-4.556 10.632-4.556 4.18 0 7.712 1.51 10.6 4.524 2.886 3.017 4.33 6.83 4.33 11.44v15.32l.001-.001zm12.408 0h-2.456V2.6h2.456v45.307zm39.489-15.317c0 4.394-1.498 8.154-4.492 11.277-2.996 3.125-6.69 4.687-11.084 4.687-4.353 0-8.024-1.562-11.02-4.687-2.995-3.123-4.49-6.883-4.49-11.278s1.495-8.155 4.49-11.28c2.995-3.123 6.667-4.685 11.02-4.685s8.036 1.573 11.052 4.718c3.016 3.146 4.525 6.895 4.525 11.246l-.001.002zm-2.65 0c0-3.663-1.23-6.852-3.684-9.566-2.457-2.714-5.537-4.072-9.242-4.072-3.663 0-6.73 1.368-9.21 4.104-2.478 2.737-3.715 5.914-3.715 9.533 0 3.662 1.228 6.85 3.684 9.564 2.454 2.715 5.534 4.072 9.24 4.072 3.663 0 6.73-1.367 9.21-4.104s3.717-5.913 3.717-9.533v.002zm37.228 0c0 4.567-1.434 8.37-4.297 11.407-2.867 3.038-6.41 4.557-10.633 4.557-4.18 0-7.713-1.508-10.6-4.524-2.887-3.016-4.33-6.83-4.33-11.44 0-4.566 1.432-8.37 4.297-11.408 2.865-3.038 6.41-4.556 10.633-4.556 2.025 0 3.79.366 5.3 1.1 1.51.732 2.93 1.658 4.267 2.778v2.908c-1.467-1.508-2.92-2.627-4.363-3.36-1.444-.733-3.18-1.1-5.204-1.1-3.232 0-6.098 1.315-8.596 3.942-2.5 2.63-3.748 5.86-3.748 9.695 0 3.834 1.248 7.066 3.748 9.694 2.498 2.63 5.363 3.942 8.596 3.942 3.576 0 6.55-1.357 8.92-4.072 2.37-2.714 3.555-5.902 3.555-9.565V2.6h2.456l-.001 29.99zm22.428-12.992h-2.586c-2.5 0-4.697 1.164-6.592 3.49-1.896 2.327-2.844 5.257-2.844 8.79v16.03h-2.456V17.27h2.457v5.883c.82-1.637 2.07-3.027 3.75-4.17 1.68-1.14 3.49-1.712 5.43-1.712h2.843V19.6l-.002-.002z"
        />
      </Item>
    );
  }
}

class Twitter extends Component {
  render() {
    return (
      <Icon
        xmlns="http://www.w3.org/2000/svg"
        {...this.props}
        width="30"
        height="30"
        viewBox="-149.5 150.5 30 30"
      >
        <path d="M-120.5 156.816a11.409 11.409 0 0 1-3.299.904 5.753 5.753 0 0 0 2.526-3.178 11.493 11.493 0 0 1-3.648 1.395 5.745 5.745 0 0 0-9.788 5.24 16.31 16.31 0 0 1-11.841-6.002 5.72 5.72 0 0 0-.778 2.888 5.741 5.741 0 0 0 2.555 4.781 5.732 5.732 0 0 1-2.602-.719l-.001.073a5.75 5.75 0 0 0 4.608 5.633 5.768 5.768 0 0 1-2.595.098 5.751 5.751 0 0 0 5.366 3.989 11.522 11.522 0 0 1-7.134 2.459c-.463 0-.921-.027-1.37-.081a16.253 16.253 0 0 0 8.806 2.581c10.567 0 16.344-8.753 16.344-16.344 0-.249-.005-.497-.016-.744a11.612 11.612 0 0 0 2.867-2.973z" />
      </Icon>
    );
  }
}

class Email extends Component {
  render() {
    return (
      <Icon
        xmlns="http://www.w3.org/2000/svg"
        {...this.props}
        width="30"
        height="30"
        viewBox="241 241 30 30"
      >
        <path d="M267.241 262.73a14.38 14.38 0 0 1-1.95 2.219c-.736.684-1.566 1.296-2.458 1.804s-1.856.913-2.852 1.193a11.61 11.61 0 0 1-3.142.425c-1.649 0-3.236-.27-4.719-.788a11.108 11.108 0 0 1-3.889-2.323c-1.11-1.016-2.25-2.686-2.924-4.252-.601-1.39-.84-2.883-.84-5.133 0-1.618.373-3.422 1.016-4.936a11.983 11.983 0 0 1 2.582-3.827c1.079-1.068 2.385-1.929 3.899-2.572 1.359-.57 2.956-.85 4.884-.85 1.545 0 3.007.249 4.345.726 1.327.477 2.479 1.161 3.433 2.033.902.819 1.452 1.804 2.043 3.132.519 1.161.705 2.167.705 3.723a9.72 9.72 0 0 1-.674 3.619c-.446 1.099-.778 1.763-1.452 2.593-.684.819-1.099 1.317-1.877 1.773-.892.519-1.587.767-2.178.767-.373 0-.653-.073-.809-.207-.156-.135-.249-.311-.28-.56-.041-.29-.01-.653.104-1.079.114-.456.29-.892.508-1.421l3.93-10.567H262.8l-.643 1.711a4.794 4.794 0 0 0-1.649-1.607c-1.089-.633-2.022-.913-3.236-.913a7.24 7.24 0 0 0-3.858 1.079 10.165 10.165 0 0 0-2.924 2.727c-.778 1.068-.964 1.628-1.338 2.738l-.062.176c-.436 1.286-.653 2.551-.653 3.754 0 .798.145 1.556.425 2.261.28.705.664 1.327 1.151 1.846a5.468 5.468 0 0 0 1.753 1.255 5.243 5.243 0 0 0 2.209.467c.881 0 1.721-.145 2.707-.487.653-.228 1.234-.601 1.804-1.182.104.332.28.622.55.881.519.519 1.213.788 2.064.788.892 0 1.846-.311 3.007-.964 1.027-.581 1.628-1.244 2.416-2.188.85-1.016 1.276-1.867 1.753-3.08.519-1.296.778-2.696.778-4.179 0-1.867-.249-3.132-.882-4.521-.684-1.483-1.369-2.676-2.489-3.671-1.13-.996-2.479-1.773-3.993-2.313-1.504-.529-3.142-.799-4.843-.799-2.084 0-3.858.311-5.413.944-1.711.695-3.204 1.659-4.459 2.862a13.602 13.602 0 0 0-3.007 4.345c-.757 1.721-1.182 3.806-1.182 5.714 0 2.603.321 4.418 1.068 6.056.83 1.794 2.178 3.671 3.453 4.77a12.658 12.658 0 0 0 4.48 2.51c1.649.529 3.35.799 5.061.799 1.182 0 2.364-.166 3.526-.477a14.887 14.887 0 0 0 6.253-3.495c.892-.84 1.929-2.157 2.281-2.79.135-.249.228-.446.301-.602h-1.919l-.049.093zm-9.188-2.748c-.456.581-.799.985-1.224 1.265-.456.311-.819.508-1.286.612a5.687 5.687 0 0 1-1.421.176c-.581 0-1.12-.104-1.597-.311a3.696 3.696 0 0 1-1.255-.871 4.309 4.309 0 0 1-.84-1.317 4.501 4.501 0 0 1-.301-1.659c0-.985.187-2.043.55-3.142.041-.124.083-.249.114-.353.29-.892.446-1.193.985-2.074.591-.975 1.462-1.721 2.385-2.333a5.2 5.2 0 0 1 2.956-.902c.436 0 .892.052 1.369.156.373.083.581.197.933.404.062.031.114.062.176.104.404.228.767.529 1.078.902.28.332.498.767.653 1.276l-2.136 5.994c-.33.839-.713 1.534-1.139 2.073z" />
      </Icon>
    );
  }
}

class Github extends Component {
  render() {
    return (
      <Icon
        xmlns="http://www.w3.org/2000/svg"
        {...this.props}
        width="30"
        height="30"
        viewBox="497 497 30 30"
      >
        <path d="M512 498.345c-7.731 0-14 6.269-14 14 0 6.187 4.011 11.433 9.575 13.284.7.128.955-.304.955-.673 0-.333-.013-1.437-.02-2.606-3.893.846-4.716-1.651-4.716-1.651-.637-1.617-1.554-2.047-1.554-2.047-1.272-.868.096-.851.096-.851 1.406.097 2.146 1.442 2.146 1.442 1.249 2.14 3.278 1.521 4.074 1.162.127-.902.49-1.521.889-1.87-3.108-.354-6.377-1.555-6.377-6.92 0-1.53.546-2.777 1.44-3.757-.143-.355-.625-1.78.138-3.707 0 0 1.174-.376 3.85 1.436a13.315 13.315 0 0 1 3.503-.471c1.189.005 2.387.161 3.505.473 2.671-1.813 3.847-1.436 3.847-1.436.766 1.929.284 3.351.14 3.705.897.98 1.439 2.228 1.439 3.757 0 5.378-3.274 6.562-6.393 6.909.504.434.95 1.285.95 2.591 0 1.871-.019 3.38-.019 3.842 0 .373.255.808.964.672 5.559-1.854 9.567-7.101 9.567-13.284.001-7.731-6.268-14-13.999-14z" />
      </Icon>
    );
  }
}

class Linkedin extends Component {
  render() {
    return (
      <Icon
        xmlns="http://www.w3.org/2000/svg"
        {...this.props}
        width="30"
        height="30"
        viewBox="-3 -3 30 30"
      >
        <path d="M4.078 25.95H-1.9V6.021h5.979V25.95zm21.922 0h-5.979V15.304c0-2.774-.988-4.155-2.947-4.155-1.552 0-2.537.773-3.031 2.322V25.95H8.064s.08-17.936 0-19.929h4.719l.365 3.986h.124c1.226-1.993 3.185-3.344 5.871-3.344 2.043 0 3.695.568 4.956 1.995C25.368 10.087 26 12.004 26 14.696V25.95z" />
        <ellipse cx="1.089" cy="1.039" rx="3.089" ry="2.989" />
      </Icon>
    );
  }
}

export default { Logo, Twitter, Email, Github, Linkedin };
