import useTitles from '../../shared/useTitles';

const Blog = () => {
  useTitles('Blog |');
  return (
    <div className='bg-gray-300'>
      <div>
        <div className='bg-slate-100 px-3 my-2 md:my-8 py-4 '>
          <h3 className='text-xl font-bold text-amber-700'></h3>
          <h5 className='mb-2 text-3xl font-bold text-gray-900 dark:text-white'>
            <span className='font-thin'>Question 1. </span>
            What is an access token and refresh token? How do they work and
            where should we store them on the client-side?
          </h5>
          <p className='mb-5 text-base text-gray-500 dark:text-gray-400 sm:text-lg'>
            <span className='text-xl'>Access Token: </span>
            An access token is a security credential that is used to
            authenticate and authorize access to protected resources in a
            system. It is typically issued by an authentication server after a
            user successfully logs in or grants consent to an application. The
            access token contains information such as the users identity and
            permissions, and it is included in API requests to verify the users
            authorization.
          </p>
          <p className='mb-5 text-base text-gray-500 dark:text-gray-400 sm:text-lg'>
            <span className='text-xl'>Access Token: </span>A refresh token is a
            separate credential that is also issued during the authentication
            process. Its purpose is to obtain a new access token when the
            current one expires. Instead of sending the users credentials (e.g.,
            username and password) again, the refresh token can be exchanged for
            a fresh access token. This helps improve security by reducing the
            exposure of the users credentials. Refresh tokens often have a
            longer lifespan than access tokens and can be used to obtain new
            access tokens multiple times.
          </p>
          <p className='mb-5 text-base text-gray-500 dark:text-gray-400 sm:text-lg'>
            <span className='text-xl'>Working Process: </span>Access tokens and
            refresh tokens work together in a typical authentication flow. Heres
            an overview of how they are used.
            <ul>
              <li>
                User authentication: When a user logs in or grants consent to an
                application, the authentication server verifies the users
                credentials and issues an access token and a refresh token.
                <br />
              </li>
              <li>
                Access token usage: The client application includes the access
                token in the header or authorization section of API requests to
                access protected resources. The server then verifies the access
                token to ensure the user is authorized to access the requested
                resource.
                <br />
              </li>
              <li>
                {' '}
                Access token expiration: Access tokens have a limited lifespan
                to enhance security. Once an access token expires, the client
                application needs to obtain a new one. <br />
              </li>
              <li>
                {' '}
                Refresh token usage: When the access token expires, the client
                application sends the refresh token to the authentication server
                to request a new access token. The server verifies the refresh
                token and, if valid, issues a fresh access token. The refresh
                token itself remains unchanged.
                <br />
              </li>
            </ul>
          </p>
          <p className='mb-5 text-base text-gray-500 dark:text-gray-400 sm:text-lg'>
            <span className='text-xl'>storage Process: </span>Regarding storage
            on the client-side, best practices suggest the following:
            <ul>
              <li>
                Access token storage: Access tokens should be securely stored on
                the client-side to prevent unauthorized access. One common
                approach is to store the access token in memory (e.g., a
                variable) rather than persisting it on disk. Storing it in a
                secure HTTP-only cookie or a browsers local storage can also be
                considered, depending on the applications specific security
                requirements.
                <br />
              </li>
              <li>
                Refresh token storage: Refresh tokens are more sensitive than
                access tokens because they have a longer lifespan and can be
                used to obtain new access tokens. It is recommended to store
                refresh tokens in a secure manner. One common practice is to
                store them as HTTP-only cookies, which provides some protection
                against cross-site scripting (XSS) attacks. Alternatively, they
                can be stored in encrypted form in a client-side database or
                another secure storage mechanism.
                <br />
              </li>
            </ul>
          </p>
        </div>
        <div className='bg-slate-100 px-3 my-2 md:my-8 py-4 '>
          <h3 className='text-xl font-bold text-amber-700'></h3>
          <h5 className='mb-2 text-3xl font-bold text-gray-900 dark:text-white'>
            <span className='font-thin'>Question 2. </span>
            Compare SQL and NoSQL databases?
          </h5>
          <p className='mb-5 text-base text-gray-500 dark:text-gray-400 sm:text-lg'>
            <span className='text-xl'>SQL: </span>
            SQL is a domain-specific language used to query and manage data. It
            works by allowing users to query, insert, delete, and update records
            in relational databases. SQL also allows for complex logic to be
            applied through the use of transactions and embedded procedures such
            as stored functions or views.
          </p>
          <p className='mb-5 text-base text-gray-500 dark:text-gray-400 sm:text-lg'>
            <span className='text-xl'>NoSQL: </span>
            NoSQL stands for Not only SQL. It is a type of database that uses
            non-relational data structures, such as documents, graph databases,
            and key-value stores to store and retrieve data. NoSQL systems are
            designed to be more flexible than traditional relational databases
            and can scale up or down easily to accommodate changes in usage or
            load. This makes them ideal for use in applications
          </p>
        </div>
        <div className='bg-slate-100 px-3 my-2 md:my-8 py-4 '>
          <h3 className='text-xl font-bold text-amber-700'></h3>
          <h5 className='mb-2 text-3xl font-bold text-gray-900 dark:text-white'>
            <span className='font-thin'>Question 3. </span>
            What is express js? What is Nest JS?
          </h5>
          <p className='mb-5 text-base text-gray-500 dark:text-gray-400 sm:text-lg'>
            <span className='text-xl'>Express JS: </span>
            Express.js is a popular web application framework for Node.js. It
            provides a simple and minimalistic approach to building web servers
            and APIs. Express.js is known for its flexibility, allowing
            developers to handle HTTP requests and responses, define routes,
            implement middleware, and perform various other server-side tasks.
          </p>
          <p className='mb-5 text-base text-gray-500 dark:text-gray-400 sm:text-lg'>
            <span className='text-xl'>Nest JS: </span>
            NestJS is a progressive Node.js framework for building efficient,
            scalable, and maintainable server-side applications. It is built
            with TypeScript and heavily inspired by Angular's architecture,
            leveraging decorators, dependency injection, and modules. NestJS
            focuses on modularity and follows a modular, component-based
            structure. It provides a powerful CLI, built-in support for features
            like routing, validation, and authentication, and integrates well
            with various libraries and databases. NestJS promotes the use of
            TypeScript, which adds static typing and enhanced developer
            productivity to the Node.js ecosystem.
          </p>
        </div>
        <div className='bg-slate-100 px-3 my-2 md:my-8 py-4 '>
          <h3 className='text-xl font-bold text-amber-700'></h3>
          <h5 className='mb-2 text-3xl font-bold text-gray-900 dark:text-white'>
            <span className='font-thin'>Question 4. </span>
            What is MongoDB aggregate and how does it work?
          </h5>
          <p className='mb-5 text-base text-gray-500 dark:text-gray-400 sm:text-lg'>
            <span className='text-xl'>MongoDB: </span>
            Aggregation is a way of processing a large number of documents in a
            collection by means of passing them through different stages. The
            stages make up what is known as a pipeline. The stages in a pipeline
            can filter, sort, group, reshape and modify documents that pass
            through the pipeline.
            <br />
            One of the most common use cases of Aggregation is to calculate
            aggregate values for groups of documents. This is similar to the
            basic aggregation available in SQL with the GROUP BY clause and
            COUNT, SUM and AVG functions. MongoDB Aggregation goes further
            though and can also perform relational-like joins, reshape
            documents, create new and update existing collections, and so on.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
