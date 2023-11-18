using System;

namespace _02
{
    internal class Program
    {
        static void Main(string[] args)
        {
            string input = Console.ReadLine();
            int price = 0;
            if (input == "eggs")
            {
                price = 5;
            }
            else if(input == "muffin")
            {
                price = 2;
            }
            else if(input == "banica")
            {
                price = 10;
            }
            else
            {
                Console.WriteLine("Invalid Input");
            }
            if(input == "eggs" || input == "muffin" || input == "banica")
            {
                Console.WriteLine($"{price}lv");
            }
            

        }
    }
}
