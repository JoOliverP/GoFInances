import React from 'react'
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { HighlightCard } from '../../components/HighlightCard'
import { TransactionCard, TransactionCardProps } from '../../components/TransactionCard'

import { 
   Container,
   Header,
   UserWrapper,
   UserInfo,
   Photo,
   User,
   UserGreeting,
   UserName,
   Icon,
   HighlightCards,
   Transactions,
   Title,
   TransactionList,
} from './styles'

export interface DataListProps extends TransactionCardProps {
   id: string
}

export function Dashboard() {
   const data: DataListProps[] = [{
      id: '1',
      type: 'positive',
      title: "Desenvolvimento de site",
      amount: "R$ 17.000,00",
      category: {
         name: 'Vendas',
         icon: 'dollar-sign'
      },
      date:"17/02/2022"
   },
   {
      id: '2',
      type: 'negative',
      title: "Aluguel de site",
      amount: "R$ 17.000,00",
      category: {
         name: 'Vendas',
         icon: 'coffee'
      },
      date:"17/02/2022"
   },
   {
      id: '3',
      type: 'positive',
      title: "Desenvolvimento de site",
      amount: "R$ 17.000,00",
      category: {
         name: 'Vendas',
         icon: 'shopping-bag'
      },
      date:"17/02/2022"
   }
];

   return (
      <Container>
         <Header>
           <UserWrapper> 
           <UserInfo>
              <Photo 
                  source={{uri: 'https://avatars.githubusercontent.com/u/40873909?v=4'}}
               />

              <User>
                 <UserGreeting>Olá,</UserGreeting>
                 <UserName>Joing</UserName>
              </User>
           </UserInfo>

            <Icon name="power"/>
           </UserWrapper>
         </Header>
         <HighlightCards>
            <HighlightCard 
               type="up"
               title="Entradas" 
               amount="R$ 17.400,00" 
               lastTransaction="última entrada dia 13 de abril" 
            />
            <HighlightCard
               type="down" 
               title="Saídas" 
               amount="R$ 1.259,00" 
               lastTransaction="última saída dia 03 de abril" 
            />
            <HighlightCard
               type="total" 
               title="Total" 
               amount="R$ 16.400,00" 
               lastTransaction="01 à 16 de abril" 
            />
         </HighlightCards>

         <Transactions>
            <Title>
               Listagem
            </Title>

            <TransactionList 
               data={data}
               keyExtractor={item => item.id}
               renderItem={({ item }) => <TransactionCard data={item}/> }
            />

            
         </Transactions>
      </Container>
   )
}
