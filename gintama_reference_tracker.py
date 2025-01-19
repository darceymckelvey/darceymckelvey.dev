from colorama import init, Fore, Style

# Initialize colorama
init()

def main():
    while True:
        # Print menu
        print("\n=== Gintama Reference Tracker ===")
        print("1. Add reference")
        print("2. Exit")
        
        # Get user choice
        choice = input("\nEnter choice (1-2): ")
        
        if choice == "1":
            episode = input("Enter episode number: ")
            print(f"You entered episode {episode}")
        elif choice == "2":
            print("Goodbye!")
            break
        else:
            print("Invalid choice!")

if __name__ == "__main__":
    print("Starting tracker...")  # Debug print
    try:
        main()
    except Exception as e:
        print(f"Error occurred: {str(e)}") 