export interface ACARSDataInterface 
{
    msgNo: number; 
    from: string;
    to: string;
    type: string;
    received: string;
    relayed: string;
};

export interface ACARSMessageInterface 
{
  msgNo: number,
  from: string,
  to: string,
  payload: string
  type: string,
  received: string,
  relayed: string
}