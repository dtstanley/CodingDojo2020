import java.util.ArrayList;

public class BasicJava {
    int[] print1255(){
            //Write a method that prints all the numbers from 1 to 255.
            int[] printArray = new int[255];
            for (int i=1; i<=255;i++) {
                printArray[i-1] =i;
              //  System.out.println(printArray[i-1]);
            }
        return printArray;
        }
ArrayList<Integer> oddPrint(int num){
    //Write a method that prints all the odd numbers from 1 to 255.
   // int sum = 0;
    ArrayList<Integer> list = new ArrayList<Integer>();

   // int value = num;
    for (int i = 1; i<= num; i++){
        if (i % 2 != 0){
            list.add(i);
            System.out.println(i);
        }
    }
    return list;
}


    } //end of BasicJava

