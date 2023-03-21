using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Movement : MonoBehaviour
{
    public float speed = 5.0f; // 캡슐 이동 속도

    // Update is called once per frame
    void Update()
    {
        float h = Input.GetAxis("Horizontal"); // 좌우 입력값
        float v = Input.GetAxis("Vertical"); // 상하 입력값

        // 캡슐 이동
        transform.Translate(new Vector3(h, 0, v) * speed * Time.deltaTime);
    }
}
