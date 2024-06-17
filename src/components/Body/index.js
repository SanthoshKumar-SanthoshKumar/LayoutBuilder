// Write your code here
import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value

      const allUncheked = !showContent && !showLeftNavbar && !showRightNavbar

      return (
        <div className="body-container">
          <div className="middle-section">
            {allUncheked ? (
              <div className="alluncheked-section">
                <h1>Layout Builder</h1>
              </div>
            ) : (
              <>
                {showLeftNavbar && (
                  <div className="left-navbar">
                    <h1>Left Navbar Menu</h1>
                    <u className="list-items">
                      <li>Item 1</li>
                      <li>Item 2</li>
                      <li>Item 3</li>
                      <li>Item 4</li>
                    </u>
                  </div>
                )}
                {showContent && (
                  <div className="content-section">
                    <h1>Content</h1>
                    <p>
                      Lorem ipsum This warning in React typically occurs when
                      there is an issue with the way components are imported or
                      exported. Here are some common reasons and solutions for
                      this issue:
                    </p>
                  </div>
                )}

                {showRightNavbar ? (
                  <div className="right-navbar">
                    <h1>Right Navbar Menu</h1>
                    <u className="list-items">
                      <li className="add-container">
                        <p>Ad 1</p>
                      </li>
                      <li className="add-container">
                        <p>Ad 2</p>
                      </li>
                    </u>
                  </div>
                ) : null}
              </>
            )}
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default Body
