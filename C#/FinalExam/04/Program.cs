using System;

namespace _04
{
    internal class Program
    {
        static void Main(string[] args)
        {
            char zvezdichka = '*';
            string[] zvezda = new string[10];
            string[] zvezda2 = new string[2];
            string[] zvezda3 = new string[3];
            string[] zvezda4 = new string[1];
            string[] zvezdi30 = new string[30];
            Console.Write(" ");
            for (int i = 0; i < zvezda.Length; i++)
            {
                Console.Write(zvezdichka);
            }
            Console.WriteLine();
            for (int i = 0; i < zvezda2.Length; i++)
            {
                for (int j = 0; j < zvezda2.Length; j++)
                {
                
                    Console.Write(" ");
                    Console.Write(zvezdichka);
                    Console.Write("       ");
                }
                Console.WriteLine();
            }
            
            for (int i = 0; i < zvezda3.Length; i++)
            {
                for (int j = 0; j < zvezda4.Length; j++)
                {
                    Console.Write(zvezdichka);
                    Console.Write(zvezdichka);
                    Console.Write("        ");
                    for (int k = 0; k < zvezdi30.Length; k++)
                    {
                        Console.Write(zvezdichka);
                    }
                }
                Console.WriteLine();
            }
            for (int i = 0; i < zvezda2.Length; i++)
            {
                for (int j = 0; j < zvezda2.Length; j++)
                {

                    Console.Write(" ");
                    Console.Write(zvezdichka);
                    Console.Write("       ");
                }
                Console.WriteLine();
            }
            Console.Write(" ");
            for (int i = 0; i < zvezda.Length; i++)
            {
                Console.Write(zvezdichka);
            }
        }
    }
}
