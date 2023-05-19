import { Stack, VStack, Heading, Text, Image } from '@chakra-ui/react';
import React from 'react';
import { ProjectModal } from '../Components/ProjectModel';
import redBackgroundImage from '../Assets/Images/redBackgroundImage.png';
import Star from '../Assets/Images/Star.svg';
import AFRICA from '../Assets/Images/AFRICA.png';
import userFlow from '../Assets/Images/userFlow.png';
import Membership from '../Assets/Images/Membership.png';
import Features from '../Assets/Images/Features.png';
import restaurantDetails from '../Assets/Images/restaurantDetails.png';
import Explore from '../Assets/Images/Explore.png';
import Wallets from '../Assets/Images/Wallets.png';
import emptyStates from '../Assets/Images/emptyStates.png';
import { MotionBox, rotation } from './Home';

interface IEnjoyAfricaProps{
    openModal: boolean;
    closeModal: () => void;
}

export const EnjoyAfrica = ({openModal, closeModal}:IEnjoyAfricaProps) => {
	return (
		<ProjectModal background={`url(${redBackgroundImage})`} open={openModal} close={closeModal}>
			<Stack
				alignItems={'center'}
				spacing={'96px'}
			>
				<VStack
					justifyContent={'center'}
					align={'center'}
					pt={'100px'}
					spacing={'20px'}
				>
					<Heading 
						color={'#fff'}
						fontSize={['60px','88px']}
					>Enjoy Africa</Heading>
					<Text textAlign={'center'}  color={'#fff'} fontSize={'30px'}  w={['','60%']}>
                        A platform for discount dining in Africa, offering convenient lifestyle financial services.
					</Text>
					<MotionBox
						variants={rotation}
						animate='animate'
						// alignSelf={'center'} 
					>
						<Image 
							src={Star} 
							w={'100px'} 
							h={'100px'} 
						/>
					</MotionBox>
				</VStack>
				<Image src={AFRICA} objectFit={'cover'} borderRadius={'24px'} />
				<Stack
					w={'800px'}
					spacing={'24px'}
				>
					<Heading  color={'#fff'} fontSize={'48px'}>Background & Goals</Heading>
					<Text color={'#fff'} fontSize={'20px'} fontWeight={'light'}>
                        Navigating the food scene can be quite hectic in Nigeria especially those in busy cities like Lagos where people work more than they live. 
                        Finding a decent place to hang out, eat at reasonable prices can be a chore. There really isn’t any way for people to find good restaurants and know their price offerings for food. 
                        What one gets most times are instagram posts by food reviewers or poorly written blogs that just gives a brief view into what these restaurants offer. 
					</Text>
					<Heading color={'#fff'} fontSize={'24px'} fontWeight={400}>Goals</Heading>
					<Text color={'#fff'} fontSize={'20px'} fontWeight={'light'}>
                        Providing customers access to best deals on discount dining so as to save cost on food and drinks as well as a view into restaurant offers, 
                        details, location and menu.
					</Text>
				</Stack>
				<Stack
					w={'800px'}
					spacing={'24px'}
				>
					<Heading color={'#fff'} fontSize={'48px'}>Role</Heading>
					<Text color={'#fff'} fontSize={'20px'} fontWeight={'light'}>
                        I was Lead Product Designer for this project. 
                        The project had a short deadline and I was handed a PRD.  
                        I decided to conduct some research to get more direction on what I was building before heading into creating prototypes.
					</Text>
				</Stack>
				<Stack
					w={'800px'}
					spacing={'24px'}
				>
					<Heading color={'#fff'} fontSize={'48px'} w={'100%'}>Research</Heading>
					<Text color={'#fff'} fontSize={'20px'} fontWeight={'light'}>
                        To kickoff the project, I and the other designer assigned to the project decided to have a sit down with the PM to understand the requirements and have a clear direction. 
                        Due to legal constraints, I won’t be able to reveal the full insights we got, but we had a couple of how might we’s, 
                        one of which was “How might we make users see top restaurants with the best offers”, “How might we make our membership cards work like debit cards”.
                        After our discussions, we decided to go with a wallet and cards system for our membership cards and also, a subscription model. 
					</Text>
					<Heading fontSize={'36px'} fontWeight={'400'} color={'#fff'}>
						User Flows
					</Heading>
					<Text color={'#fff'} fontSize={'20px'} fontWeight={'light'}>
						Based on the research, we came up with a couple of flows and lo-fi screens, of which I can’t reveal all due to constraints.
					</Text>
				</Stack>
				<Image src={userFlow}  objectFit={'cover'} />
				<Stack
					w={'800px'}
					spacing={'24px'}
				>
					<Heading color={'#fff'} fontSize={'48px'} >High Fidelity Screens</Heading>
					<Text color={'#fff'} fontSize={'20px'} fontWeight={'light'}>
                        After defining our structure and conversing with key stakeholders,  it was time to start fleshing out the screens. 
                        I already had  a direction in mind so I did not make a serious moodboard for this project.
					</Text>
					<Heading fontSize={'36px'} fontWeight={'400'} color={'#fff'}>
                        Homepage/Membership Cards
					</Heading>
					<Text color={'#fff'} fontSize={'20px'} fontWeight={'light'}>
                        A guest user is shown highlighted features and also membership cards, 
                        what it is, how it works and an option to get their personalized cards.
					</Text>
				</Stack>
				<Image src={Membership}  objectFit={'cover'} />
				<Stack
					w={'800px'}
					spacing={'24px'}
				>
					<Heading fontSize={'36px'} fontWeight={'400'} color={'#fff'}>
                        Highlighted Features
					</Heading>
					<Text  color={'#fff'} fontSize={'20px'} fontWeight={'light'}>
                        To view different highlighted features, a user clicks on any and see’s the restaurants that exist in said collection. 
                        User can click on each restaurant card to see restaurant details
					</Text>
				</Stack>
				<Image src={Features}  objectFit={'cover'} />
				<Stack
					w={'800px'}
					spacing={'24px'}
				>
					<Heading fontSize={'36px'} fontWeight={'400'} color={'#fff'}>
                        Restaurant Details
					</Heading>
					<Text  color={'#fff'} fontSize={'20px'} fontWeight={'light'}>
                        Once a user clicks on a restaurant card, 
                        they see the full details of such restaurant based on their permissions at said point in time. 
                        They can see pictures of said restaurants, menus, food gallery etc.
					</Text>
				</Stack>
				<Image src={restaurantDetails}  objectFit={'cover'} />
				<Stack
					w={'800px'}
					spacing={'24px'}
				>
					<Heading fontSize={'36px'} fontWeight={'400'} color={'#fff'}>
                        Explore
					</Heading>
					<Text  color={'#fff'} fontSize={'20px'} fontWeight={'light'}>
                        By going to the explore page, a user gets access to see all restaurants available on the platform, 
                        of which are separated into categories. 
                        If a user tries to click on restaurants in the discount offers category they see a modal that informs them to subscribe.
					</Text>
				</Stack>
				<Image src={Explore}  objectFit={'cover'} />
				<Stack
					w={'800px'}
					spacing={'24px'}
				>
					<Heading color={'#fff'} fontSize={'36px'} fontWeight={'400'} >Wallet and Cards</Heading>
					<Text  color={'#fff'} fontSize={'20px'} fontWeight={'light'}>
                        A registered user and one that has gotten a membership card can see their wallets, 
                        fund it, pay for meals and view their transaction history.
					</Text>
				</Stack>
				<Image src={Wallets} />
				<Stack
					w={'800px'}
					spacing={'24px'}
				>
					<Heading color={'#fff'} fontSize={'36px'} fontWeight={'400'} >Empty States</Heading>
					<Text  color={'#fff'} fontSize={'20px'} fontWeight={'light'}>
                        These are animated empty states that users come across in certain scenarios.
					</Text>
				</Stack>
				<Image src={emptyStates} />
				<Stack
					w={'800px'}
					spacing={'24px'}
				>
					<Heading color={'#fff'} fontSize={'48px'} >Takeaways</Heading>
					<Text  color={'#fff'} fontSize={'20px'} fontWeight={'light'}>
                        This was an interesting project for me, as it gave me the chance to solve a problem that affected me personally too. 
                        It also helped me understand that I shouldn’t build for myself. 
                        The fact that this was a problem I face also, almost put me in that box where some of the solutions 
                        I wanted to create were tailored to me but I hhad to understand that I’m not the only person that will use this product. 
                        There are quite a number of people with different ideologies, thought processes etc that will use this.<br/>
                        It really was an interesting project.
					</Text>
				</Stack>
			</Stack>
		</ProjectModal>
	);
};