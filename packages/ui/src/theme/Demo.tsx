import styled from 'styled-components';

const Wrapper = styled.div`
  background: ${({ theme }) => theme.colors.primary.main.color};
  color: white;
`;

export default function Demo(): JSX.Element {
  return (
    <Wrapper>
      <div className="space-y-12 py-10">
        <div className="container mx-auto">
          <div className="bg-white max-w-sm mx-auto rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 transform hover:scale-105 cursor-pointer">
            <div className="h-20 bg-red-500 flex items-center justify-between">
              <h1 className="text-white ml-4 border-2 py-2 px-4 rounded-full">
                1
              </h1>
              <p className="mr-20 text-white text-lg">Agenda/Topic</p>
              <p className="mr-4 text-white font-thin text-lg">SAAS-0000</p>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
