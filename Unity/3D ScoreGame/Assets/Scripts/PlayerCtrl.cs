using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using UnityEngine.SceneManagement;

public class PlayerCtrl : MonoBehaviour
{
    Rigidbody rigid;
    public float jumpForce = 250.0f; // 점프력
    public float walkForce = 5.0f; // 이동속도
    public GameObject prefabs; // 파티클 프리팹
    GameObject fx;

    GameObject item;
    public int score = 0; // 총 점수

    GameObject obj; // 거리를 측정하고싶은 오브젝트
    GameObject image;

    void Start()
    {
        this.rigid = GetComponent<Rigidbody>();
        this.item = GameObject.Find("Score");
        this.image = GameObject.Find("Image");

        // MeasureDistance("Item");
    }

    void Update()
    {
        // 점프한다
        if(Input.GetKeyDown(KeyCode.Space) && this.rigid.velocity.y == 0.0f) {
            this.rigid.AddForce(transform.up * this.jumpForce);
        }

        // 상하좌우 이동
        // int key = 0;

        // if(Input.GetKey(KeyCode.RightArrow)) {
        //     key = 1;
        //     this.rigid.AddForce(transform.right * key * this.walkForce);
        // }

        // if(Input.GetKey(KeyCode.LeftArrow)) {
        //     key = -1;
        //     this.rigid.AddForce(transform.right * key * this.walkForce);
        // }

        // if(Input.GetKey(KeyCode.UpArrow)) {
        //     key = 1;
        //     this.rigid.AddForce(transform.forward * key * this.walkForce);
        // }

        // if(Input.GetKey(KeyCode.DownArrow)) {
        //     key = -1;
        //     this.rigid.AddForce(transform.forward * key * this.walkForce);
        // }


        // Get Axis를 사용하여 3차원 조작
        this.transform.Translate(this.walkForce * Input.GetAxis("Horizontal") * Time.deltaTime, 0f, this.walkForce * Input.GetAxis("Vertical") * Time.deltaTime);

        // 재시작 버튼
        if (Input.GetKeyDown(KeyCode.R)) {
            SceneManager.LoadScene(SceneManager.GetActiveScene().buildIndex);
        }

        // 매 프레임마다 player가 x좌표로 0.1f씩 이동
        // transform.position += new Vector3(0.1f * Time.deltaTime, 0, 0);
        // MeasureDistance("Item (4)");
    }

    void OnTriggerEnter(Collider other) {
        score += 10;
        GetComponent<AudioSource>().Play();
        fx = Instantiate(prefabs, this.transform);

        if (score >= 0) {
            this.item.GetComponent<Text>().text = "Score : " + score.ToString();
            this.image.GetComponent<Image>().fillAmount += 0.1f;
        }

        Destroy(other.gameObject);
    }

    void MeasureDistance(string name) {
        this.obj = GameObject.Find(name);
        
        float distance = Vector3.Distance(transform.position, obj.transform.position);
        Debug.Log(name + "과의 거리 : " + distance);
    }
}
