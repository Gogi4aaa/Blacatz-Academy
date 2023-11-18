using System;

namespace _01
{
    internal class Program
    {
        static void Main(string[] args)
        {
            int maxNumber = int.MinValue;
            int minNumber = int.MaxValue;
            int sum = 0;
            for (int i = 1; i <= 5; i++)
            {
                Console.Write("Enter number day" + i + ":");
                int number = int.Parse(Console.ReadLine());
                sum += number;
                if(number > maxNumber)
                {
                    maxNumber = number; 
                }
                if(number < minNumber)
                {
                    minNumber = number;
                }
            }
            Console.WriteLine($"Total: {sum}");
            Console.WriteLine($"Min: {minNumber}");
            Console.WriteLine($"Max: {maxNumber}");
            Console.WriteLine($"Average: {(double)sum / 5}");
        }
    }
}
