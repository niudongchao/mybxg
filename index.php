<?php

//���·�ɣ�����URL�Ĳ�ͬ��Ӧ��ͬ��ҳ�棩

header('content-type:text/html;charser=utf8');
//include('./header.html');
//   echo  '<div>��ҳ����</div>';
//include('./footer.html');
   //include   ��ǰPHPҳ��Ƕ��һ����ҳ��

   //�����ܹ�ͨ��URL���ֳ��û�������ĸ�ҳ��     
     //Ĭ��Ŀ¼����
           $dir = 'main';
     //Ĭ���ļ�����
         $filename = 'index';  

             
            //����·��  ����URL·��
           if(array_key_exists('PATH_INFO', $_SERVER)){
           	//PATH_INFO���Դ���


           	//
           	$path = $_SERVER['PATH_INFO'];   //main/index

            //ȥ����һ��б��
            $str = substr($path, 1);
             //�ַ����ָ��js��split��������
            $ret = explode('/', $str);
               // var_dump($ret);
            if(count($ret)==2){
            	//·��������
            	$dir=$ret[0];  //����Ŀ¼
            	$filename=$ret[1]; //�����ļ�����
            }else{
                 //�������ȫ����ת����¼ҳ��
            	$filename='login';
                }
            }
            

           //$_SERCERB�������һ������
  
           //echo "$path";
            //Ƕ����ҳ��
            include('./views/'.$dir.'/'.$filename.'.html');

?>
