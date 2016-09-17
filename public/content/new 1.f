program matrice


    integer n,m,a(101,101),i,j,k
write(*,*) 'n='
read(*,*) n
write(*,*) 'm='
read(*,*) m
k=0
do i=1,n
 do j=1,m
    read(*,*) a(i,j)
   enddo
enddo
  

do i=1,n
a(0,j)=0
a(n+1,j)=0
enddo

 do j=1,m 
a(i,0)=0
a(i,m+1)=0
enddo

do i=1,n
 do j=1,m  
if((mod(a(i,j-1),2)==0 .and. mod(a(i,j+1),2==0)).and. (mod(a(i-1,j),2)==0.and. mod(a(i+1,j),2)==0)) then
                k=k+1
endif
    enddo
enddo

write(*,*) 'Numarul de elemente cu vecinii pari este', k
endprogram