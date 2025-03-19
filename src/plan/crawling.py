from selenium import webdriver
from selenium.webdriver import ActionChains, Keys
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import pyperclip
import subprocess

if __name__ == '__main__':
    chrome_browser = subprocess.Popen(r'C:\Program Files\Google\Chrome\Application\chrome.exe --remote-debugging-port=9222 --user-data-dir="C:\temp\chrome"')
    options = webdriver.ChromeOptions()
    options.add_argument('--no-sandbox')
    options.add_argument('--disable-dev-shm-usage')
    options.add_argument('--ignore-certificate-errors')
    options.add_experimental_option('debuggerAddress', '127.0.0.1:9222')
    driver = webdriver.Chrome(options=options)

    driver.get('https://account.everytime.kr/login')
    driver.implicitly_wait(6)

    id = driver.find_element(By.NAME, "id")
    pw = driver.find_element(By.NAME, "password")
    login = driver.find_element(By.XPATH, "/html/body/div[1]/div/form/input")
    pyperclip.copy("hyun4you2006")
    ActionChains(driver).move_to_element(id)\
                        .click()\
                        .key_down(Keys.CONTROL)\
                        .send_keys("v")\
                        .key_up(Keys.CONTROL)\
                        .perform()
                        
    pyperclip.copy("7rlaehgus7")
    ActionChains(driver).move_to_element(pw)\
                        .click()\
                        .key_down(Keys.CONTROL)\
                        .send_keys("v")\
                        .key_up(Keys.CONTROL)\
                        .perform()
    ActionChains(driver).move_to_element(login)\
                        .click()\
                        .perform()
    try:
        logo = WebDriverWait(driver, 6).until(EC.presence_of_element_located((By.XPATH, '//*[@id="logo"]')))
    except:
        driver.quit()

    driver.get('https://everytime.kr/timetable')
    driver.implicitly_wait(6)

    subjects = []
    td = driver.find_elements(By.CSS_SELECTOR, "table.tablebody tbody tr td")
    for i in range(len(td)):
        subjectsName = td[i].find_elements(By.CSS_SELECTOR, "h3")
        subjectsCss = td[i].find_elements(By.CSS_SELECTOR, "div.subject")
        subjects.append([])
        for j in range(len(subjectsName)):
            subjects[i].append([subjectsName[j].text, (float((subjectsCss[j].value_of_css_property('top'))[0:-2]) - 450) / 50 + 9, (float((subjectsCss[j].value_of_css_property('height'))[0:-2]) - 1) / 50])

    print(subjects)
