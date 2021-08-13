package org.locator;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class confirmationPage {
        public confirmationPage() {
			WebDriver driver = null;
			PageFactory.initElements(driver, this);
		}
       
        @FindBy(id="radiobutton_0")
        private WebElement confirm;
        
        @FindBy(id="continue")
        private WebElement ok;

		public WebElement getConfirm() {
			return confirm;
		}

		public WebElement getOk() {
			return ok;
		}

	
	
	
}
