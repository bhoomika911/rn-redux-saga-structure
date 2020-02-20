import React from 'react';
import { configure, shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Signin from './Signin';

configure({ adapter: new Adapter() });

global.fetch = jest.fn().mockImplementation(() => {
    let pr = new Promise((resolve, reject) => {
        resolve({
            json: () => {
                return new Promise((resolve, reject) => {
                    resolve({
                        status: "success"
                    });
                });
            }
        });
    });

    return pr;
});


describe("Unit testing : Signin page", () => {
    describe("Rendering", () => {
        test("Snapshot testing", () => {
            let wrapper = render(<Signin />);
            expect(wrapper).toMatchSnapshot();
        });

        test("find element : email text input", () => {
            let wrapper = shallow(<Signin />);
            expect(wrapper.find({ testID: "email" })).toHaveLength(1);
        });

        test("find element : password text input", () => {
            let wrapper = shallow(<Signin />);
            expect(wrapper.find({ testID: "password" })).toHaveLength(1);
        });

        test("find element : Signin button", () => {
            let wrapper = shallow(<Signin />);
            expect(wrapper.find({ testID: "singinBtn" })).toHaveLength(1);
        });
    });

    describe("Interaction", () => {
        test("onChangeEmail", () => {
            let wrapper = shallow(<Signin />);
            wrapper.find({ testID: "email" }).simulate('changeText', "a@gmail.com");
            expect(wrapper.state("email")).toBe('a@gmail.com');
        });

        test("onChangePassword", () => {
            let wrapper = shallow(<Signin />);
            wrapper.find({ testID: "password" }).simulate('changeText', "123456");
            expect(wrapper.state("password")).toBe('123456');
        });

        test("Signin : without entering password", () => {
            let wrapper = shallow(<Signin />);
            wrapper.find({ testID: "email" }).simulate('changeText', "a@gmail.com");
            wrapper.find({ testID: "singinBtnTouchable" }).simulate('press');
            expect(wrapper.state("signinDone")).toBe(false);
        });

        test("Signin : success", () => {
            let wrapper = shallow(<Signin />);
            wrapper.find({ testID: "email" }).simulate('changeText', "a@gmail.com");
            wrapper.find({ testID: "password" }).simulate('changeText', "123456");
            wrapper.find({ testID: "singinBtnTouchable" }).simulate('press');
            expect(wrapper.state("signinDone")).toBe(true);
        });

        test("callWebservice function", async () => {
            let wrapper = shallow(<Signin />).instance();
            let res = await wrapper.callWebservice();
            expect(res).toMatchObject({
                status: "success"
            });
        });

        test("testUpdateState function", () => {
            let wrapper = shallow(<Signin />);
            let instance = wrapper.instance();
            instance.testUpdateState();
            expect(wrapper.state("test")).toEqual(200);
        });
    });
});