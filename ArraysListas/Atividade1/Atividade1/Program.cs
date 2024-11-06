using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
/*
01 - Crie um programa que leia um array de 5 inteiros do usuário e, em seguida, 
calcule e exiba a soma de todos os elementos do array.
*/
namespace Atividade1
{
    class Program
    {
        static void Main(string[] args)
        {
            int[] numeros = new int[5];
            int soma = 0;

            for(int i = 0; i < 5; i++)
            {
                Console.WriteLine($"Valores para a posição {i} do vetor: ");
                numeros[i] = int.Parse(Console.ReadLine());
            }

            for (int i = 0; i < 5; i++)
            {
                soma += numeros[i];
            }

            Console.WriteLine($"Soma = {soma}");
            Console.ReadKey();
        }
    }
}
