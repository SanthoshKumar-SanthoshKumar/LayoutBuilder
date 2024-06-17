// Write your code here

import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowRightNavbar,
        onToggleShowLeftNavbar,
      } = value

      const onChangeContent = () => {
        onToggleShowContent()
      }

      const onChangeLeftNavbar = event => {
        onToggleShowLeftNavbar(event.target.value)
      }

      const onChangeRightNavbar = event => {
        onToggleShowRightNavbar(event.target.value)
      }

      return (
        <div className="config-container">
          <h1>Layout</h1>
          <div className="input-section">
            <div>
              <input
                id="content"
                type="checkbox"
                checked={showContent}
                onChange={onChangeContent}
              />
              <label htmlFor="content">Content</label>
            </div>
            <div>
              <input
                id="left-content"
                type="checkbox"
                checked={showLeftNavbar}
                onChange={onChangeLeftNavbar}
              />
              <label htmlFor="left-content">Left Navbar</label>
            </div>
            <div>
              <input
                id="right-content"
                type="checkbox"
                checked={showRightNavbar}
                onChange={onChangeRightNavbar}
              />
              <label htmlFor="right-content">Right Navbar</label>
            </div>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
