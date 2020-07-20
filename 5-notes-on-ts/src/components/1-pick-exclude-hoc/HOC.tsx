import React from 'react';

function withLogProps<Props>(WrappedComponent: React.ComponentType<Props>) {
  return class LogProps extends React.Component<Props> {
    componentWillReceiveProps() {
      console.log('Currently available props: ', this.props);
    }
    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
}

function withErrorMessage<Props>(WrappedComponent: React.ComponentType<Props>) {
  return function (props: Props & ErrorLogProps) {
    const { error, ...rest } = props as ErrorLogProps;
    return (
      <>
        <WrappedComponent {...rest} />
        {error & <div>{error}</div>}
      </>
    );
  };
}

type InputProps = {
  name: string;
  type: string;
};

type WithOnChangeProps = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string | boolean;
};

const Input = ({
  value,
  onChange,
  type,
  name,
}: InputProps & WithOnChangeProps) => (
  <input type={type} name={name} value={value} onChange={onChange} />
);

type WithOnChangeState = {
  value: string | boolean;
};

type ExpandedOnChangeProps = {
  initialValue: string | boolean;
};

function withOnChange<Props>(WrappedComponent: React.ComponentType<Props>) {
  return class OnChange extends React.Component<
    Diff<Props, WithOnChangeProps> & ExpandedOnChangeProps,
    WithOnChangeState
  > {
    state = {
      value: this.props.initialValue,
    };
    onChance = (event: React.ChangeEvent<HTMLInputElement>) => {
      const target = event.target;
      const value = target.type === 'checkbox' ? target.checked : target.value;
      this.setState({ value });
    };
    render() {
      const { initialValue, ...props } = this.props as ExpandedOnChangeProps;
      return (
        <WrappedComponent
          {...(props as Props)} // we need to be explicit here
          onChange={this.onChance}
          value={this.state.value}
        />
      );
    }
  };
}

type RemoteData<Error, Data> =
  | { type: 'NotLoaded' }
  | { type: 'Loading' }
  | { type: 'Error'; data: Data }
  | { type: 'Success'; data: Data };

type FetchState<Error, Data> = {
  data: RemoteData<Error, Data>;
};

function withFetch<FetchResultType, Props extends { data: FetchResultType }>(
  fetchFn: () => Promise<FetchResultType>,
  WrappedComponent: React.ComponentType<Props>
) {
  return class Fetch extends React.Component<
    Omit<Props, 'data'>,
    FetchState<string, Fetch>
  > {
    state: FetchState<string, FetchResultType> = {
      data: { type: 'NotLoaded' },
    };
    componentDidMount() {
      this.setState({ data: { type: 'Loading' } });
      fetchFn()
        .then((data) =>
          this.setState({
            data: { type: 'Success', data },
          })
        )
        .catch((error) =>
          this.setState({
            data: { type: 'Error', error },
          })
        );
    }
    render() {
      const { data } = this.state;
      switch (data.type) {
        case 'NotLoaded':
          return <div />;
        case 'Loading':
          return <div>Loading...</div>;
        case 'Error':
          return <div>{data.error}</div>;
        case 'Success':
          return (
            <WrappedComponent {...(this.props as Props} data={data.data} />
          );
      }
    }
  };
}
