"""
Author: Amanda Rovey
Date: 9/11/2024
File Name: Rovey_lemonadeStandSchedule.py
Description: This file manages a weekly schedule for a lemonade stand.
"""

# List of tasks for running a lemonade stand
tasks = ["Set up the lemonade stand", "Prepare lemonade", "Serve customers", "Collect payments", "Clean the stand"]

# Print each task
for task in tasks:
    print(task)

# List of days
days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

# Display the task for each day
for i in range(len(days)):
    if days[i] == "Sunday":
        print(days[i] + ": It's the Lord's day. Get to church!")
    elif days[i] == "Saturday":
        print(days[i] + ": It's a day off. Sleep in!.")
    else:
        print(days[i] + ": Task - " + tasks[i % len(tasks)])

