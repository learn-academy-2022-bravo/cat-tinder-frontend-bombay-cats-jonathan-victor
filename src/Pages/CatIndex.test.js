import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import CatIndex from './CatIndex'

Enzyme.configure({ adapter: new Adapter() })



describe("When CatIndex renders", () => {

    it("displays a heading about the index page", () => {

      const renderCatIndex = shallow(<CatIndex />)
      const renderCatIndexPage = renderCatIndex.find("h2").text()

      expect(renderCatIndexPage).toEqual("Here are a bunch of cats!")
    })
  })