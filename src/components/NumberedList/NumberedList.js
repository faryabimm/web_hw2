import React from 'react';

class Rest {
    makeAjaxCall(url, methodType) {
        var promisObj = new Promise(function (resolve, reject) {
            var xhr = new XMLHttpRequest();
            xhr.open(methodType, url, true);
            xhr.send();

            xhr.onreadystatechange = function () {
                console.log(xhr.readyState, xhr.status);
                if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                        console.log("xhr done ok!");
                        var resp = xhr.responseText;
                        var respJson = JSON.parse(resp);
                        // console.log(respJson);
                        resolve(respJson);
                    } else {
                        reject(xhr.status);
                        console.log("xhr failed");
                    }
                } else {
                    console.log("xhr processing going on");
                }
            }
        });
        return promisObj;
    }

    fetch(url) {
        return new Promise((resolve, reject) => {
            // simulate web call
            setTimeout(() => {
                resolve(100)
            }, 1000);
        });
    }
}

class DataSource {
    constructor() {
        this.sl = [{name: 'qq'}, {name: 'qq'}, {name: 'qq'}, {name: 'qq'}, {name: 'qq'}];
    }

    get_student_data(success_func, error_func) {
        let r = new Rest();
        let p = r.makeAjaxCall('http://localhost:3000', 'GET');
        p.then(
            (result) => {

                // console.log(result);
                this.sl = result;
                success_func(this.sl);
            },
            (err) => {
                console.log(err)
                error_func();
            });
    }


}

function NumberListselectData(dataSource) {
    return dataSource.get_student_data((x) => {return x},() => {});
}


// This function takes a component...
function withSubscription(WrappedComponent, selectData) {
    // ...and returns another component...
    return class extends React.Component {
        constructor(props) {
            super(props);
            this.handleChange = this.handleChange.bind(this);
            this.state = {
                data: selectData(DataSource, props)
            };
        }

        componentDidMount() {
            // ... that takes care of the subscription...
            DataSource.addChangeListener(this.handleChange);
        }

        componentWillUnmount() {
            DataSource.removeChangeListener(this.handleChange);
        }

        handleChange() {
            this.setState({
                data: selectData(DataSource, this.props)
            });
        }

        render() {
            // ... and renders the wrapped component with the fresh data!
            // Notice that we pass through any additional props
            return <WrappedComponent data={this.state.data} {...this.props} />;
        }
    };
}


function ListItem(props) {
    return <li>{props.value}</li>
}

class NumberedList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            students: "default_val",
        };
    }

    componentDidMount() {
        // let r = new Rest();
        // let p = r.makeAjaxCall('http://localhost:3000', 'GET');
        // p.then(
        //     (result) => {
        //
        //         // console.log(result);
        //
        //         this.setState({
        //             students: result,
        //         });
        //     },
        //     (err) => {
        //         console.log(err)
        //     });
    }

    render() {

        const students = this.state.students;
        console.log("############");
        console.log(students);
        if (this.state.students === "default_val") {
            return (<div>LOADING</div>);
        } else {
            return students.map((i) => {
                <div key={i.name.toString()}>{i.name}</div>
            });
        }

    }
}


export default NumberedList






