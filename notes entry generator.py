import datetime


def main():
    '''
        <h4>Active Projects</h4>
        <ul>
            <li>
                <a href="https://github.com/jgross11/"></a>
                <ul>
                    <li>
                        
                    </li>
                    <li>
                        
                    </li>
                </ul>
            </li>
            <br>
            <li>
                <a href="https://github.com/jgross11/"></a>
                <ul>
                    <li></li>
                </ul>
            </li>
        </ul>
        <h4>Ideas</h4>
        <ul>
            <li>
                
            </li>
        </ul>
        <h4>Personal</h4>
        <ul>
            <li>
                Book: 
            </li>
            <li>
                News:
            </li>
        </ul>
    </div>
    '''
    date = determine_date()
    date_check = input(f"Are you creating an entry for the week of {date}? y/n: ").lower()
    if date_check == 'y' or date_check == 'yes':
        pass
    else:
        date = input("Enter date in format mmddyyyy: ")
    header = generate_header(date)
    activities = generate_projects()

    print(header)

def determine_date():
    today = datetime.date.today()
    # assume entries are created on monday
    monday = datetime.date(today.year, today.month, today.day - today.weekday())
    return f'{monday.month}{monday.day}{monday.year}'

def generate_header(date : str) -> str:
    month = date[0:2]
    day = date[2:4]
    year = date[4:]
    template = f'''
    <div class="entry">
        <h3 id="{date}">Week of {month}/{day}/{year}</h3>
    '''
    return template
    
def generate_projects() -> str:

    pass

def generate_ideas() -> str:
    pass

def generate_personal() -> str:
    pass

def generate_footer() -> str:
    pass

if __name__ == "__main__":
    main()