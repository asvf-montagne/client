import styled from '@emotion/styled'

export const StyledContent = styled.span(
  (props) => `
    margin: 0 0 128px 0;
    
    color: ${props.theme.typography.colors.primary};
    font-weight: ${props.theme.typography.weight.regular};
    font-size: 1.3125rem;
    line-height: 1.5em;
    letter-spacing: .005em;
    
    p {
      padding: .8em 0;
    }
      
    .er-header {
      color: ${props.theme.typography.colors.secondary};
      font-weight: ${props.theme.typography.weight.semiBold};
      padding: 1em 0;
    }
    
    blockquote {
      margin: .8em 0;
      padding: .4em 0 .4em 40px;
      
      div {
        border-left: 3px solid #C4C4C4;
        padding: 0 12px 0 40px;
        
        .er-quote__content {
          margin: 0;
          font-weight: ${props.theme.typography.weight.light};
          letterSpacing: .005em;
        }
        
        .er-quote__caption {
          font-weight: ${props.theme.typography.weight.light};
          color: ${props.theme.typography.colors.gray1};
          margin: 0;
          padding: 0
        }
      }
    }
    
    ul {
      list-style: none;
      padding: .4em 0 .4em 40px;
      margin: 0;
      outline: none;
    }
  
    ul > li:before {
      display: inline-block;
      content: "-";
      width: 1em;
      margin-left: -1em;
    }
    
    a {
      text-decoration: none;
      color: ${props.theme.typography.colors.link};
    }
    
    mark {
      background-color: rgba(245,235,111,0.29);
    }
    
    strong > small {
      color: ${props.theme.typography.colors.gray1};
      font-weight: ${props.theme.typography.weight.regular};
    }
  `
)

export const StyledContentInner = styled.div`
  padding: 0 72px;
`