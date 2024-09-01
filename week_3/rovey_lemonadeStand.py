"""
Author: Your Name
Date: Current Date
File Name: rovey_lemonadeStand.py
Description: This file calculates the cost and profit of a lemonade stand.
"""

# Function to calculate the total cost of making lemonade
def calculate_cost(lemons_cost, sugar_cost):
    total_cost = lemons_cost + sugar_cost
    return total_cost

# Function to calculate the profit from selling lemonade
def calculate_profit(lemons_cost, sugar_cost, selling_price):
    total_cost = calculate_cost(lemons_cost, sugar_cost)
    profit = selling_price - total_cost
    return profit

# Variables to test each function with cheaper prices
lemons_cost = 3.0  # Reduced cost of lemons
sugar_cost = 2.0   # Reduced cost of sugar
selling_price = 10.0

# Building a string for the results
cost_result = f"({lemons_cost}) + ({sugar_cost}) = ({calculate_cost(lemons_cost, sugar_cost)})"
profit_result = f"Profit: {calculate_profit(lemons_cost, sugar_cost, selling_price)}"

# Printing the results to the console
print(cost_result)
print(profit_result)
