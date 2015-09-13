# Compensate-MTurk-HIT

As a requester, if something went wrong with your HIT on [Amazon Mechanical Turk](https://www.mturk.com/mturk/welcome),
turkers would ask you to compensate their wasted time and effort. 

You can simple use this code to create an external "Compensate HIT". (Save you sometime!)

## Usage ##

The following URL parameters are supported:

- **workers** (required)

  A list of workerId(s) that are allowed to submit this HIT. WorkerIds are separated by commas (,).
  All unlisted workers will not be able to accept (nor submit) this HIT.
  For example,
  
  ```
  https://your.hit.url.here.html&worker=workerId1,workerId2,workerId3
  ```