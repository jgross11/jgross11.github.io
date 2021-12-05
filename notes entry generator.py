import datetime
import re

def main():
    date = determine_date()
    header = generate_header(date)
    activities = generate_projects()
    ideas = generate_ideas()
    personal = generate_personal()
    footer = generate_footer()
    entry = f'''{header}{activities}{ideas}{personal}{footer}'''
    print(entry)               

def confirm(query : str) -> bool:
    answer = input(query + ' y/n: ').lower().strip()
    return answer == 'y' or answer == 'ye' or answer == 'yes'

def determine_date() -> str:
    today = datetime.date.today()
    # assume entries are created on sunday
    sunday = today - datetime.timedelta(days=today.weekday()+1)
    sunday = f'{sunday.month}{sunday.day}{sunday.year}'
    if confirm(f"Are you creating an entry for the week of {sunday}?"):
        return sunday
    else:
        return input("Enter date in format mmddyyyy: ")

def generate_header(date : str) -> str:
    month = date[0:2]
    day = date[2:4]
    year = date[4:]
    template = f'''<div class="entry"><h3 id="{date}">Week of {month}/{day}/{year}</h3>'''
    return template
    
def generate_projects() -> str:
    text = '<h4>Active Projects</h4><ul>'
    # projects
    while True:
        project_name = input('Enter project name: ')
        text = text + f'<li><a target="_blank" href="https://github.com/jgross11/">{project_name}</a><ul>'
        # project entries
        while True:
            project_entry = input('Enter task description: ')
            text = text + f'<li>{project_entry}</li>'
            if confirm(f'Another entry for {project_name}?'):
                continue
            else: 
                break
        text = text + '</ul></li>'
        if confirm('Another project?'):
            continue
        else: 
            break
    text = text + '</ul>'
    return text

def generate_ideas() -> str:
    text = '<h4>Ideas</h4><ul>'
    # ideas
    while True:
        idea = input('Enter idea information: ')
        text = text + f'<li>{idea}</li>'
        if confirm('Another idea?'):
            continue
        else: 
            break
    text = text + '</ul>'
    return text

def generate_personal() -> str:
    text = '<h4>Personal</h4><ul>'
    # ideas
    while True:
        personal = input('Enter personal information: ')
        text = text + f'<li>{personal}</li>'
        if confirm('Another personal?'):
            continue
        else: 
            break
    text = text + '</ul>'
    return text

def generate_footer() -> str:
    return f'<!-- generated on {datetime.datetime.now()}--></div>'

if __name__ == "__main__":
    main()