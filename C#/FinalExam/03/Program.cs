using System;

namespace _03
{
    internal class Program
    {
        static void Main(string[] args)
        {
            string firstWord = Console.ReadLine();
            string secondWord = Console.ReadLine();
            if (firstWord.Length == secondWord.Length)
            {
                Console.WriteLine("The words have equal length");
            }
            else if(firstWord.Length > secondWord.Length)
            {
                Console.WriteLine($"Winner is:{firstWord}");
            }
            else if(firstWord.Length < secondWord.Length)
            {
                Console.WriteLine($"Winner is:{secondWord}");
            }
        }
    }
}
