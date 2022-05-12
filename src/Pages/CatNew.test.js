import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import CatNew from './CatNew'

Enzyme.configure({ adapter: new Adapter() })



describe("When CatNew renders", () => {

    it("displays a heading", () => {

        const renderCatNew = shallow(<CatNew />)
        const renderCatNewPage = renderCatNew.find("Form")
  
        expect(renderCatNewPage.length).toEqual(1)
      })

    it("displays a heading", () => {

      const renderCatNew = shallow(<CatNew />)
      const renderCatNewPage = renderCatNew.find("FormGroup")

      expect(renderCatNewPage.length).toEqual(4)
    })
    it("displays a heading", () => {

        const renderCatNew = shallow(<CatNew />)
        const renderCatNewPage = renderCatNew.find("Label")
  
        expect(renderCatNewPage.length).toEqual(4)
      })
      it("displays a heading", () => {

        const renderCatNew = shallow(<CatNew />)
        const renderCatNewPage = renderCatNew.find("Input")
  
        expect(renderCatNewPage.length).toEqual(4)
      })
  })